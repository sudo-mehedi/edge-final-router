import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Header from "./shared/Header";
function ProfilePage() {
  const { id } = useParams();

  return (
    <div>
      <Header />
      ProfilePage {id}
    </div>
  );
}

export default ProfilePage;
