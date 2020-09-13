import React from "react";
import { successMessage } from "../utils/notifications";

const CommentsForm = ({ success, error, renderError, form, formLoading }) => {
  return (
    <div className="mt-10">
      {success && successMessage("Thanks! We received your comment!")}
      {error && renderError(error)}
      <form onSubmit={form.handleSubmit} className="w-full">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/3 px-1 mb-2 md:mb-0">
            <input
              name="author"
              placeholder="Name"
              type="text"
              className="w-full appearance-none text-gray-800 font-light border border-gray-900 p-2 focus:outline-none"
              onChange={form.handleChange}
              value={form.values.author}
            />
            <p className="text-red-500 text-xs italic">{form.errors.author}</p>
          </div>
          <div className="w-full md:w-1/3 px-1 mb-2 md:mb-0">
            <input
              name="authorEmail"
              placeholder="Email Address"
              className="w-full appearance-none text-gray-800 font-light border border-gray-900 p-2 focus:outline-none"
              onChange={form.handleChange}
              value={form.values.authorEmail}
            />
            <p className="text-red-500 text-xs italic">
              {form.errors.authorEmail}
            </p>
          </div>
          <div className="w-full md:w-1/3 px-1">
            <input
              name="authorUrl"
              placeholder="Website"
              className="w-full appearance-none text-gray-800 font-light border border-gray-900 p-2 focus:outline-none"
              onChange={form.handleChange}
              value={form.values.authorUrl}
            />
          </div>
          <p className="text-red-500 text-xs italic">{form.errors.authorUrl}</p>
          <div className="w-full px-1">
            <textarea
              name="content"
              placeholder="Comment..."
              className="w-full appearance-none text-gray-800 font-light border border-gray-900 p-5 focus:outline-none mt-3"
              onChange={form.handleChange}
              value={form.values.content}
            ></textarea>
            <p className="text-red-500 text-xs italic">{form.errors.content}</p>
            <button
              className={`w-full mt-4 md:mt-0 block md:inline-block appearance-none bg-gray-900 text-white text-base font-bold tracking-wider uppercase py-4 ${
                formLoading && "cursor-wait"
              }`}
              disabled={formLoading ? true : false}
            >
              {formLoading ? "Sending..." : "Share"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CommentsForm;
