import React, { useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Omar Bouslime",
    image: assets.profile_pic,
    email: "omarbouslime2024@gmail.com",
    phone: "06123456789",
    address: {
      line1: "15 derb sidi ali",
      line2: "casablnca,morocco",
    },
    gender: "male",
    dob: "2003-01-17",
  });

  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="flex flex-col max-w-lg gap-2 text-sm">
      <img className="rounded w-36" src={userData.image} alt="" />

      {isEdit ? (
        <input
          className="mt-4 text-3xl font-medium bg-gray-200 text-blue-7 max-w-60"
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p className="mt-4 text-3xl font-medium text-blue-5">{userData.name}</p>
      )}
      <hr className="bg-blue-1 h-[1px] border-none" />
      <div>
        <p className="mt-3 underline text-blue-7">Contact Information</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-blue-5">
          <p className="font-medium">Email id:</p>
          <p className="text-blue-5">{userData.email}</p>
          <p className="font-medium">Phone:</p>
          {isEdit ? (
            <input
              className="bg-gray-200 max-w-52 text-blue-7"
              type="text"
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          ) : (
            <p className="text-blue-5 ">{userData.phone}</p>
          )}
          <p className="font-medium">Address</p>
          {isEdit ? (
            <p>
              <input
                className="bg-gray-200 text-blue-7"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
                value={userData.address.line1}
                type="text"
              />
              <br />
              <input
                className="bg-gray-200 text-blue-7"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
                value={userData.address.line2}
                type="text"
              />
            </p>
          ) : (
            <p className="text-blue-5">
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>
      </div>
      <div>
        <p className="mt-3 underline text-blue-7">Basic Information</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-blue-5">
          <p className="font-medium">Gender:</p>

          {isEdit ? (
            <select
              className="bg-gray-200 max-w-20 text-blue-7"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
              value={userData.gender}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p className="text-blue-5">{userData.gender}</p>
          )}
          <p className="font-medium">Birthday:</p>
          {isEdit ? (
            <input
              className="bg-gray-200 max-w-28 text-blue-7"
              type="date"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, dob: e.target.value }))
              }
              value={userData.dob}
            />
          ) : (
            <p className="text-blue-5">{userData.dob}</p>
          )}
        </div>
      </div>
      <div className="mt-10">
        {isEdit ? (
          <button
            className="px-8 py-2 transition-all border rounded-full text-blue-9 border-blue-7 bg-blue-5 hover:bg-blue-7 hover:text-blue-2"
            onClick={() => setIsEdit(false)}
          >
            Save Information
          </button>
        ) : (
          <button
            className="px-8 py-2 transition-all border rounded-full text-blue-9 border-blue-7 bg-blue-5 hover:bg-blue-7 hover:text-blue-2"
            onClick={() => setIsEdit(true)}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
