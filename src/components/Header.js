function Header(props) {
    return (
      <div className="container">
        <h1>{props.header}</h1>
        <p>{props.description}</p>
      </div>
    );
  }