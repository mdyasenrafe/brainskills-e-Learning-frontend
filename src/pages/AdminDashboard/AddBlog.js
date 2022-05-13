import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { addBlogApi } from "../../API";
import { Toast } from "../../Componets/Toast";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const AddBlog = () => {
  const { register, handleSubmit, reset } = useForm();
  const [image, setImage] = useState(null);
  const [content, setContent] = useState(null);
  const [text, setText] = useState(() =>
    EditorState.createWithContent(ContentState.createFromText(""))
  );
  const handleImageSubmit = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
    e.preventDefault();
  };

  const handleEditorChange = (state) => {
    setText(state);
    let data = draftToHtml(convertToRaw(text.getCurrentContent()));
    setContent(data);
  };

  const onSubmit = (data) => {
    data["blogPhoto"] = image;
    data["blogLongdescription"] = content;
    const res = addBlogApi(data);
    if (res?.error == true) {
      Toast.fire({
        icon: "error",
        title: res.message,
      });
    } else {
      Toast.fire({
        icon: "success",
        title: "Event added succesfully",
      });
      reset();
    }
  };

  return (
    <div>
      <h1 className="py-3 text-xl px-4 font-semibold text-gray-600">
        Add New Blog
      </h1>
      <hr />
      <form className="px-4  grid space-y-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid">
          <label className="font-semibold text-gray-600 py-2">Blog Title</label>
          <input
            className="border  p-3 outline-none rounded-md shadow-sm"
            type="text"
            {...register("blogTitle", { required: true })}
            // required
          />
        </div>
        <div className="grid">
          <label className="font-semibold text-gray-600 py-2">
            Instructor Photo
          </label>
          <input
            className="border  p-3 outline-none rounded-md shadow-sm"
            type="file"
            onChange={(e) => handleImageSubmit(e)}
            // required
          />
        </div>
        <div className="grid">
          <label className="font-semibold text-gray-600 py-2">Categroy</label>
          <input
            className="border p-2 outline-none rounded-md shadow-sm"
            type="text"
            {...register("categroy", { required: true })}
          />
        </div>
        <div className="grid">
          <label className="font-semibold text-gray-600 py-2">
            Descraption
          </label>
          <Editor
            editorState={text}
            wrapperClassName="wrapper-class"
            editorClassName="editor-class editor_class_1"
            toolbarClassName="toolbar-class"
            onEditorStateChange={handleEditorChange}
          />
        </div>
        {/* <div className="grid">
          <label className="font-semibold text-gray-600 py-2">
            Blog Description
          </label>
          <input
            className="border p-2 outline-none rounded-md shadow-sm"
            type="text"
            {...register("blogLongdescription", { required: true })}
          />
        </div> */}
        <button
          className="bg-blue-500 p-3 text-gray-50 shadow-sm rounded-md "
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
