function InterpolationBasics() {
  //1.  Data Member
  let title = "Hello World";
  let para = `DAC, KOCHI, TVDM ipsum dolor sit amet consectetur adipisicing elit. Pariatur, optio
                repellendus delectus velit, est eaque nihil non, et alias dicta animi
                asperiores ullam placeat odit autem sunt voluptates impedit repudiandae?`;

  let mystyle = { color: "red" };
  //2. member function, coming soon...

  // 3. UI / VIEW :: JSX
  return (
    <div>
      <h1 style={mystyle}>{title}</h1>
      <h1 style={{ color: "red" }}>{title}</h1>

      <p style={{ background: "tomato", color: "white", padding: "16px" }}>
        {para}
      </p>
    </div>
  );
}

export default InterpolationBasics;
