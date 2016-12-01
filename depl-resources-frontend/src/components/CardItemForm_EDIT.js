import React from 'react';

export const CardItemEditForm = (props) => {
  console.log(props)
  return(
    <div>
      <h2>Insert new document (defaults to depl team for now...)</h2>
      <form>
      <select name='type'>
        <option value="standards">Standards</option>
        <option value="siteConfig">Site Configuration</option>
        <option value="advancedConfig">Advanced Configuration</option>
        <option value="mapLoading">Map Loading</option>
        <option value="siteBuild">Site Build</option>
      </select>
      <h3>Title</h3>
      <input type='text' name='title' defaultValue={props.data.title} />
      <h3>External URL (if applicable)</h3>
      <input type='text' name='url' defaultValue={props.data.url} />
      <h3>Entry (leave blank if external URL)</h3>
      <textarea name='entry' defaultValue={props.data.entry} />
      <br />
      <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
