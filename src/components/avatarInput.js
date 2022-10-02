export default function AvatarInput(props) {

  const handleChange = e => {
    props.onAvatarChange(e.target.value);
  }

  return (
    <fieldset>
        <legend>頭像</legend>
        <select onChange={handleChange}>
          <option value="main">固定式頭像</option>
 		</select>
    </fieldset>
  );
}
