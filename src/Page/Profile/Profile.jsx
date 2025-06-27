import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { toast } from "react-toastify";

const Profile = () => {
  const { user, updateProfileHandle, logOutHandle, setUser } = useContext(AuthContext);

  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  const handleSave = () => {
    if (!name || !photoURL) {
      toast.error("Name and photo URL required");
      return;
    }

    updateProfileHandle({ displayName: name, photoURL })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL });
        toast.success("Profile updated!");
        setEditing(false);
      })
      .catch(() => toast.error("Update failed"));
  };

  const handleLogout = () => {
    logOutHandle().then(() => toast.error("Logged Out"));
  };

  return (
    <div className={`min-h-screen flex items-center justify-center`}>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <div className="bg-white p-6 rounded shadow w-full max-w-sm text-center">
        <img
          src={photoURL}
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />

        {editing ? (
          <>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered w-full mb-2"
              placeholder="Name"
            />
            <input
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="input input-bordered w-full mb-4"
              placeholder="Photo URL"
            />
            <button className="btn hover:bg-green-600 w-full mb-2" onClick={handleSave}>
              Save
            </button>
            <button className="btn hover:bg-green-600 w-full" onClick={() => setEditing(false)}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <h2 className="text-xl font-bold mb-2">{user?.displayName}</h2>
            <p className="text-sm mb-4">{user?.email}</p>
            <button className="btn bg-green-800 text-white w-full mb-2" onClick={() => setEditing(true)}>
              Edit Profile
            </button>
            <button className="btn bg-green-800 text-white w-full" onClick={handleLogout}>
              Log Out
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
