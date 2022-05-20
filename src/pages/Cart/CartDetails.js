import React, { useEffect, useState } from "react";
import { getCartApi, postPaymentApi } from "../../API";
import LoadingSpiners from "../../Componets/LoadingSpiners";
import GetUser from "../../hooks/GetUser";

const CartDetails = () => {
  const { user } = GetUser();
  const [carts, setCarts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await getCartApi();
    if (res?.error === true) {
      setLoading(false);
    } else {
      setLoading(false);
      setCarts(res.data);
    }
  };

  let price = 0;
  let courses = [];
  for (const data of carts) {
    price = parseInt(data.coursePrice) + price;
    let myObject = {
      courseId: data?.courseId,
      courseName: data?.courseName,
      coursePhoto: data?.coursePhoto,
      coursePrice: data?.coursePrice,
    };
    courses.push(myObject);
  }

  let postBody = {
    userName: user?.userName,
    userEmail: user?.userEmail,
    userPhoneNumber: user?.userPhoneNumber,
    userId: user?._id,
    totalAmount: price,
    courses: courses,
  };
  console.log(postBody)

  const handlePayment = async () => {
    if (postBody) {
      const res = await postPaymentApi(postBody);
      if (res.error === true) {
      } else {
        if (res.url) {
          window.location.replace(res.url);
        }
      }
    }
  };

  return (
    <div>
      <div className="container mx-auto">
        <h1 className="text-4xl	font-bold text-center py-10">Cart</h1>
        {loading == true ? (
          <LoadingSpiners loading={loading} height={"50vh"} />
        ) : (
          <div className="mx-10 lg:flex space-y-5 md:space-y-0 justify-between mb-28">
            <div className="lg:w-8/12 ">
              <table className="border-collapse border-none w-full">
                <thead>
                  <tr>
                    <th className="border-none font-semibold py-3	px-6 text-left text-base">
                      Courses
                    </th>
                    <th className="border-none font-semibold py-3	px-6 text-left text-base">
                      Price
                    </th>
                    <th className="border-none font-medium py-3	px-6 text-left text-base"></th>
                  </tr>
                </thead>
                <tbody className="border-t-2 px-4">
                  {carts?.map((cart) => (
                    <tr>
                      <td className="border-none py-4	px-6">
                        <div className="flex items-center">
                          <img
                            className="w-24 "
                            src="https://i.ibb.co/GPnwYZ8/instructors-2.jpg"
                            alt=""
                          />
                          <h4 className="text-sm pl-2 font-medium">
                            {cart.courseName}
                          </h4>
                        </div>
                      </td>
                      <td className="border-none py-4	px-6 font-medium text-sm">
                        {cart.coursePrice}
                      </td>
                      <td className="border-none py-4	px-6 font-medium text-sm">
                        **
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <div className="flex">
                <h3 className="text-xl font-medium m-7 px-6">Total</h3>
                <h3 className="text-xl font-medium m-7 px-6">{price}</h3>
              </div>
              <button onClick={handlePayment} className="px-9 py-3 bg-blue-500 text-gray-50 hover:bg-green-500  rounded-md m-10 duration-150 ease-in-out  ">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDetails;
