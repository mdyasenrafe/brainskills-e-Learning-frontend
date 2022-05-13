import React from "react";
import { ImFacebook2, ImWhatsapp, ImTwitter, ImRss2 } from "react-icons/im";

const DetailsInstructor = () => {
  return (
    <div>
      <div className="md:flex space-x-2 space-y-3 px-2">
        <img
          className="max-h-80 max-w-80 rounded-sm border-b-4 border-b-blue-400 hover:border-b-red-400"
          src="https://edon-ng.envytheme.com/assets/images/instructors/instructors-5.jpg"
          alt=""
        />
        <div>
          <h4 className="text-lg font-semibold ">Richard Arthur</h4>
          <div className="flex space-x-3 py-4">
            <ImFacebook2 className=" text-gray-700 text-base hover:scale-105 ease-in duration-100" />
            <ImTwitter className=" text-gray-700 text-base hover:scale-105 ease-in duration-100" />
            <ImWhatsapp className=" text-gray-700 text-base hover:scale-105 ease-in duration-100" />
            <ImRss2 className=" text-gray-700 text-base hover:scale-105 ease-in duration-100" />
          </div>
          <p className="text-base text-gray-600">
            Sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada.
            Praesent sapien massa, convallis a pellentesque egestas Curabitur
            arcu erat, accumsan id imperdiet et, porttitor at sem. Cras
            ultricies ligula sed magna dictum porta. Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsInstructor;
