export default function NameInput(props) {

  const handleChange = e => {
    props.onNameChange(e.target.value);
  }

  return (
    <fieldset>
      <legend>名稱</legend>
      <select onChange={handleChange}>
        <NameOption name="豌豆酒" />
		<NameOption name="忘不穿 // 瞳孔的溫柔" />
        </select>
    </fieldset>
  );
}

function NameOption({ name }) {
  return <option value={name}>{name}</option>
}
