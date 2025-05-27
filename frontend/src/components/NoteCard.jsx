import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router";
import { formatDate } from "../lib/utils";
import api from "../lib/axios.js";
import toast from "react-hot-toast";

const NoteCard = ({ note, setNotes }) => {
  const handleDelete = async (e, id) => {
    e.preventDefault();
    if (!window.confirm("Are you sure you want to delete the note")) return;
    try {
      await api.delete(`/notes/${id}`);
      setNotes((prev) => prev.filter((note) => note._id !== id));
      toast.success("Note deleted successfully!!");
    } catch (error) {
      console.log("Error in deleting note", error);
      toast.error("Failed to delete the note!!");
    }
  };
  return (
    <Link
      to={`/note/${note._id}`}
      className="card bg-base-100 border-t-4 border-primary transition-all duration-300 shadow-sm hover:shadow-xl hover:scale-[1.015]"
    >
      <div className="card-body bg-primary/5 rounded-b-md transition-all duration-300">
        <h3 className="card-title text-white">{note.title}</h3>
        <p className=" text-white line-clamp-3">{note.content}</p>

        <div className="card-actions justify-between items-center mt-4">
          <span className="text-sm  text-white">
            {formatDate(new Date(note.createdAt))}
          </span>
          <div className="flex items-center gap-2">
            {/* Edit Button */}
            <button
              className="btn btn-xs btn-ghost text-info hover:bg-info hover:text-white transition"
              title="Edit"
            >
              <PenSquareIcon className="size-4" />
            </button>
            {/* Delete Button */}
            <button
              onClick={(e) => handleDelete(e, note._id)}
              className="btn btn-xs btn-ghost text-error hover:bg-error hover:text-white transition"
              title="Delete"
            >
              <Trash2Icon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;
