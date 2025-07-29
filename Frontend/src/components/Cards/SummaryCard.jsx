import React from "react";
import { LuTrash2 } from "react-icons/lu";
import { getInitials } from "../../utils/helper";

const SummaryCard = ({
  colors,
  role,
  topicsToFocus,
  experience,
  questions,
  description,
  lastUpdated,
  onSelect,
  onDelete,
}) => {
  return (
    <div
      className="bg-white border border-gray-300/40 rounded-xl p-2 overflow-hidden group cursor-pointer hover:shadow-lg transition group"
      onClick={onSelect}
    >
      <div
        className="rounded-lg p-4 relative"
        style={{ background: colors?.bgcolor || "#f9fafb" }}
      >
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-12 h-12 bg-white rounded-md flex items-center justify-center">
            <span className="text-lg font-semibold text-black">
              {getInitials(role)}
            </span>
          </div>

          <div className="flex-grow">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-[17px] font-medium">{role}</h2>
                <p className="text-xs font-medium text-gray-900">
                  {topicsToFocus}
                </p>
              </div>
            </div>
          </div>
        </div>

        <button
          className="hidden group-hover:flex items-center gap-1 text-xs text-rose-500 font-medium bg-rose-50 px-3 py-1 rounded border border-rose-100 hover:border-rose-200 absolute top-2 right-2"
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
        >
          <LuTrash2 size={14} />
        </button>
      </div>

      <div className="px-3 pb-3">
        <div className="flex flex-wrap items-center gap-2 mt-4 text-[10px] font-medium text-black">
          <div className="px-3 py-1 border border-gray-900 rounded-full">
            Experience: {experience} {experience === 1 ? "Year" : "Years"}
          </div>
          <div className="px-3 py-1 border border-gray-900 rounded-full">
            {questions} Q&A
          </div>
          <div className="px-3 py-1 border border-gray-900 rounded-full">
            Last Updated: {lastUpdated}
          </div>
        </div>

        <p className="text-[12px] text-gray-500 font-medium line-clamp-2 mt-3">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SummaryCard;
