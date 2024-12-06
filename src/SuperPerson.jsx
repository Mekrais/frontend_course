function SuperPerson({ name, superpower }) {
  return (
    <li onClick={() => {
      console.log(name);
    }}>
      {name}: {superpower}
    </li>
  );
}

export default SuperPerson;
