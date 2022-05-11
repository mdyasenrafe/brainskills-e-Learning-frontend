import React, { useState } from "react";

import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useForm } from "react-hook-form";
import * as XLSX from "xlsx";

const instructorObj = {
  instructorName: "",
  instructorPhoto: "",
  instructorDesignation: "",
};

const AddNewCourse = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [firstStep, setFirstStep] = useState(true);
  const [secondStep, setSecondStep] = useState(false);
  const [thirdStep, setThirdStep] = useState(false);
  const [firstStepData, setFirstStepData] = useState({});
  const [text, setText] = useState(() =>
    EditorState.createWithContent(ContentState.createFromText(""))
  );
  const [courseContent, setCourseContent] = useState([]);
  const [image, setImage] = useState(null);
  const [content, setContent] = useState(null);
  const [instructors, setInstructors] = React.useState([{ ...instructorObj }]);

  const handleEditorChange = (state) => {
    setText(state);
    let data = draftToHtml(convertToRaw(text.getCurrentContent()));
    setContent(data);
  };

  const handleImageSubmit = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
    e.preventDefault();
  };

  const handleFirstStep = (data) => {
    data["CoursePhoto"] = image;
    data["courseLongDescription"] = content;
    setFirstStep(false);
    setSecondStep(true);
    setFirstStepData(data);
  };

  const handleSecondStep = (data) => {
    setFirstStep(false);
    setSecondStep(false);
    setThirdStep(true);
  };

  const handleAddInstructors = () => {
    setInstructors((prev) => [...prev, { ...instructorObj }]);
  };

  const handleUpdateInstructors = (value, name, index) => {
    setInstructors((prev) => [
      ...prev.map((el, indx) =>
        index?.toString() === indx?.toString() ? { ...el, [name]: value } : el
      ),
    ]);
  };

  const handleInstructorDelete = (index) => {
    setInstructors((prev) => [
      ...prev.filter((_, indx) => indx.toString() !== index.toString()),
    ]);
  };

  const Upload = () => {
    const fileUpload = document.getElementById("fileUpload");

    if (typeof FileReader !== "undefined") {
      const reader = new FileReader();
      if (reader.readAsBinaryString) {
        reader.onload = (e) => {
          processExcel(reader.result);
        };
        reader.readAsBinaryString(fileUpload.files[0]);
      }
    } else {
      console.log("This browser does not support HTML5.");
    }
  };
  const processExcel = (data) => {
    const workbook = XLSX.read(data, { type: "binary" });
    const firstSheet = workbook.SheetNames[0];
    const excelRows = XLSX.utils.sheet_to_row_object_array(
      workbook.Sheets[firstSheet]
    );
    let list = workbook.SheetNames;
    let ch = [];
    for (var ind = 0; ind < list.length; ind++) {
      let worksheet = workbook.Sheets[list[ind]];
      for (let key in worksheet) {
        let regEx = new RegExp("^(\\w)(1){1}$");
        if (regEx.test(key) == true) {
          ch.push(worksheet[key].v);
        }
      }
    }
    setCourseContent(excelRows);
  };

  return (
    <div>
      <h1 className="py-3 text-xl px-4 font-semibold text-gray-600">
        Add New Course
      </h1>
      <hr />
      {firstStep && (
        <>
          <p className="py-4 font-bold">course details</p>
          <form
            className="px-4  grid space-y-3"
            onSubmit={handleSubmit(handleFirstStep)}
          >
            <div className="grid">
              <label className="font-semibold text-gray-600 py-2">
                course Name
              </label>
              <input
                className="border  p-3 outline-none rounded-md shadow-sm"
                type="text"
                // {...register("courseName", { required: true })}
                // required
              />
            </div>
            <div className="grid">
              <label className="font-semibold text-gray-600 py-2">
                Course Photo
              </label>
              <input
                className="border  p-3 outline-none rounded-md shadow-sm"
                type="file"
                onChange={(e) => handleImageSubmit(e)}
                // required
              />
            </div>
            <div className="grid">
              <label className="font-semibold text-gray-600 py-2">
                Video Link
              </label>
              <input
                className="border p-2 outline-none rounded-md shadow-sm"
                type="text"
                // {...register("demoVideo", { required: true })}
              />
            </div>
            <div className="grid">
              <label className="font-semibold text-gray-600 py-2">
                course Price
              </label>
              <input
                className="border p-2 outline-none rounded-md shadow-sm"
                type="text"
                // {...register("coursePrice", { required: true })}
              />
            </div>
            <div className="grid">
              <label className="font-semibold text-gray-600 py-2">
                course Categroy
              </label>
              <input
                className="border p-2 outline-none rounded-md shadow-sm"
                type="text"
                // {...register("courseCategroy", { required: true })}
              />
            </div>
            <div className="grid">
              <label className="font-semibold text-gray-600 py-2">
                Descraption
              </label>
              <Editor
                editorState={text}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
                onEditorStateChange={handleEditorChange}
              />
            </div>

            <button
              className="bg-blue-500 p-3 text-gray-50 shadow-sm rounded-md "
              type="submit"
            >
              Next
            </button>
          </form>
        </>
      )}
      {secondStep && (
        <>
          <p className="py-4 font-bold">Instructor details</p>

          <form
            className="px-4  grid space-y-3"
            onSubmit={handleSubmit(handleSecondStep)}
          >
            {!!instructors?.length &&
              instructors?.map((data, index) => (
                <>
                  <div className="grid" key={index}>
                    <label className="font-semibold text-gray-600 py-2">
                      instructor Name
                    </label>
                    <input
                      className="border  p-3 outline-none rounded-md shadow-sm"
                      type="text"
                      value={data.instructorName}
                      onChange={(e) =>
                        handleUpdateInstructors(
                          e.target.value,
                          "instructorName",
                          index
                        )
                      }
                    />
                  </div>
                  <div className="grid">
                    <label className="font-semibold text-gray-600 py-2">
                      instructor Photo
                    </label>
                    <input
                      className="border  p-3 outline-none rounded-md shadow-sm"
                      type="text"
                      onChange={(e) =>
                        handleUpdateInstructors(
                          e.target.value,
                          "instructorPhoto",
                          index
                        )
                      }
                      // {...register("instructorPhoto", { required: true })}
                      // required
                    />
                  </div>
                  <div className="grid">
                    <label className="font-semibold text-gray-600 py-2">
                      instructor Designation
                    </label>
                    <input
                      className="border  p-3 outline-none rounded-md shadow-sm"
                      type="text"
                      onChange={(e) =>
                        handleUpdateInstructors(
                          e.target.value,
                          "instructorDesignation",
                          index
                        )
                      }
                      // {...register("instructorDesignation", { required: true })}
                      // required
                    />
                  </div>
                </>
              ))}

            <div className="text-right ">
              <p
                onClick={handleAddInstructors}
                className="text-sky-500 cursor-pointor"
              >
                Add Another
              </p>
            </div>
            <button
              className="bg-blue-500 p-3 text-gray-50 shadow-sm rounded-md "
              type="submit"
            >
              Next
            </button>
          </form>
        </>
      )}
      {thirdStep && (
        <>
          <p className="py-4 font-bold">Course Content</p>
          <form>
            <div className="grid">
              <label className="font-semibold text-gray-600 py-2">
                Course Content File
              </label>
              <input
                className="upload-excel border  p-3 outline-none rounded-md shadow-sm"
                type="file"
                id="fileUpload"
                onChange={Upload}
                accept=".xlse,.xlsx,.xlsm,.xlsb,.xltx,.xltm,.xls,.xlt,.xls,.xlsb,.xml,.xla,.xlw,.xlr,.csv"
              />
              <button
                className="bg-blue-500 p-3 mt-5 text-gray-50 shadow-sm rounded-md "
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default AddNewCourse;
