import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

export default function ProfileHeader() {
  return (
    <section className=" bg-[rgba(255,255,255,0.056)] p-14 dark:bg-gray-900 dark:text-gray-100 mb-20 rounded-lg">
      <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
        <img
          src="https://source.unsplash.com/200x200/?gaming"
          alt=""
          className=" object-cover self-center flex-shrink-0 w-48 h-48 border rounded-sm md:justify-self-start dark:bg-gray-500 dark:border-gray-700"
        />
        <div className="flex flex-col">
          <div className="flex justify-between mb-4">
            <h4 className="text-4xl font-semibold  font-urbanist text-left  md:text-left">
              Welcome! 🖐️ <span className="text-violet-400">Sed Vai</span>
            </h4>
          </div>
          <p className="dark:text-gray-400 font-urbanist text-md pr-12 text-left">
            Sed non nibh iaculis, posuere diam vitae, consectetur neque. Integer
            velit ligula, semper sed nisl in, cursus commodo elit. Pellentesque
            sit amet mi luctus ligula euismod lobortis ultricies et nibh.
          </p>
        </div>
        <div className="h-48 w-60"></div>
      </div>
      <div className="flex pt-4 space-x-4 align-center justify-end">
        <Link to="#" className="justify-end">
          <Button
            className="text-sm font-semibold p-4 justify-end"
            variant="faded"
          >
            Edit Profile
          </Button>
        </Link>
      </div>
    </section>
  );
}
