import React from "react";
import type { Route } from "../../+types/root";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "PMS" },
    { name: "description", content: "Welcome to Project Management Sytem!" },
  ];
}

const HomePage = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center gap-5">
      <Link to="/sign-in">
        <Button variant={"outline"} className="bg-blue-500 text-white">
          Sign in
        </Button>
      </Link>
      <Link to="/sign-up">
        <Button variant={"outline"} className="bg-blue-500 text-white">
          Sign up
        </Button>
      </Link>
    </div>
  );
};

export default HomePage;
