import { useState } from "react";

function MovieForm({ addMovie }) {
  const [formData, setFormData] = useState({
    name: "",
    director: "",
    actor: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.director || !formData.actor) return;

    addMovie(formData);
    setFormData({ name: "", director: "", actor: "" }); // Reset
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Movie Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="director"
        placeholder="Director"
        value={formData.director}
        onChange={handleChange}
      />
      <input
        type="text"
        name="actor"
        placeholder="Actor"
        value={formData.actor}
        onChange={handleChange}
      />
      <button type="submit">Add Movie</button>
    </form>
  );
}

export default MovieForm;
