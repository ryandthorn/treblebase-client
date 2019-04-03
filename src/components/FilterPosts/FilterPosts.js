import React from "react";
import "./FilterPosts.css";

export default function FilterPosts() {
  return (
    <section className="filter-posts">
      <form>
        <fieldset>
          <legend>Search Posts</legend>
          <input type="search" placeholder="Search TrebleBase..." />
          <input type="submit" value="Go" />
        </fieldset>
        <fieldset>
          <legend>Filter Posts</legend>
          <label htmlFor="region">Region</label>
          <select id="region">
            <option value="">Select region...</option>
            <option value="pa">Pacific</option>
            <option value="ny">New York City</option>
            <option value="ne">New England</option>
            <option value="um">Upper Midwest</option>
            <option value="mw">Midwest</option>
            <option value="pl">Plains</option>
            <option value="se">Southeast</option>
            <option value="s">South</option>
            <option value="sw">Southwest</option>
            <option value="mt">Mountain</option>
          </select>
        </fieldset>
      </form>
    </section>
  );
}
