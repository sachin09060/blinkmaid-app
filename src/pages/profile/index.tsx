import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Home,
  UserCircle2,
  Edit3,
  Lock,
  Award,
} from "lucide-react";
import { useSelector } from "react-redux";
import type { InitialReduxStateProps } from "../../redux/redux.props";

const ProfilePage = () => {
  const user = useSelector((state: InitialReduxStateProps) => state.userInfo);

  return (
    <div className="min-h-screen bg-white text-gray-900 mb-3">
      {/* 🌟 Hero Section */}
      <section className="bg-gradient-to-r from-red-500 to-black text-white py-16 text-center px-6 md:px-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Your BlinkMaid Profile
        </h1>
        <p className="text-gray-200 max-w-2xl mx-auto text-base md:text-lg">
          Manage your account, view details, and keep your profile updated to
          enjoy uninterrupted services.
        </p>
      </section>

      {/* 🧾 Profile Card Section */}
      <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-lg p-8 -mt-10 relative z-10">
        {/* Profile Header */}
        <div className="flex flex-col items-center text-center">
          <img
            src={user?.profile_image}
            alt={user?.username}
            className="w-28 h-28 rounded-full border-4 border-red-500 object-cover shadow-sm"
          />
          <h1 className="text-2xl font-semibold mt-3 text-black">
            {user?.first_name} {user?.last_name}
          </h1>
          <p className="text-gray-500 text-sm">@{user?.username}</p>
          {/* <span className="mt-2 inline-block bg-red-600 text-white text-sm px-3 py-1 rounded-full">
            {user?.role}
          </span> */}
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-3 mt-6">
          <div
            role="button"
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 cursor-pointer py-2 rounded-md text-sm font-medium shadow-sm"
          >
            <Edit3 className="w-4 h-4" />
            Edit Profile
          </div>
          <div className="flex items-center gap-2 border border-gray-300 hover:border-red-500 hover:text-red-600 text-gray-700 px-5 py-2 rounded-md text-sm font-medium transition">
            <Lock className="w-4 h-4" />
            Security
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-8 space-y-4">
          <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 p-3 rounded-md">
            <Mail className="w-5 h-5 text-red-600" />
            <div>
              <p className="text-xs text-gray-500">Email</p>
              <p className="text-sm font-medium">{user?.email}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 p-3 rounded-md">
            <Phone className="w-5 h-5 text-red-600" />
            <div>
              <p className="text-xs text-gray-500">Phone</p>
              <p className="text-sm font-medium">{user?.phone_number}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 p-3 rounded-md">
            <UserCircle2 className="w-5 h-5 text-red-600" />
            <div>
              <p className="text-xs text-gray-500">Gender</p>
              <p className="text-sm font-medium capitalize">{user?.gender}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 p-3 rounded-md">
            <MapPin className="w-5 h-5 text-red-600" />
            <div>
              <p className="text-xs text-gray-500">Location</p>
              <p className="text-sm font-medium">
                {user?.city !== "NA" ? user?.city : "Not available"}{" "}
                {user?.pincode && `- ${user?.pincode}`}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 p-3 rounded-md">
            <Home className="w-5 h-5 text-red-600" />
            <div>
              <p className="text-xs text-gray-500">Address</p>
              <p className="text-sm font-medium">
                {user?.address !== "NA" ? user?.address : "Not available"}
              </p>
            </div>
          </div>
        </div>

        {/* Optional Maid Info */}
        {user?.maid_profile && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold flex items-center gap-2 text-black">
              <Award className="w-5 h-5 text-red-600" />
              Professional Profile
            </h3>
            <p className="text-sm text-gray-700 mt-2 leading-relaxed">
              {user.maid_profile}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
