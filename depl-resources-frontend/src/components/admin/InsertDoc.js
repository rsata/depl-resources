import React from 'react';

export const InsertDoc = (props) => {
  function handleNewDoc(e) {
    e.preventDefault();
    const type = e.target.type.value;
    const title = e.target.title.value;
    const url = e.target.url.value;
    const entry = e.target.entry.value;
    props.handleToggleAddNew();

    if (type==='resources' || type==='tips' || type==='password') {
      props.insertNewDocNav({type, title, url, entry});
    } else {
      props.insertNewDoc({type, title, url, entry});
    }
  }

  return (
    <div>
      <h2>Insert new document (defaults to depl team for now...)</h2>
      <form onSubmit={handleNewDoc.bind(this)}>
      <select name='type'>
        <option value="standards">Standards</option>
        <option value="siteConfig">Site Configuration</option>
        <option value="advancedConfig">Advanced Configuration</option>
        <option value="mapLoading">Map Loading</option>
        <option value="siteBuild">Site Build</option>
        <option value="resources">Resources</option>
        <option value="tips">Tips</option>
        <option value="password">Password</option>
      </select>
      <h3>Title</h3>
      <input type='text' name='title' />
      <h3>External URL (if applicable)</h3>
      <input type='text' name='url' />
      <h3>Entry (leave blank if external URL)</h3>
      <textarea name='entry'/>
      <br />
      <button type='submit'>Submit</button>
      </form>
    </div>
  );
};
