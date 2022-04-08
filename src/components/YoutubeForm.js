import React from "react";

const YoutubeForm = () => {
  return (
    <div>
      <form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>

        <div className="form-control">
          <lable htmlFor="email">Email</lable>
          <input type="email" id="email" name="email" />
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input type="text" id="channel" name="channel" />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default YoutubeForm;
