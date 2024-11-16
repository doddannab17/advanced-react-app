const ErrorExample = () => {
  let count = 0;
  function incr() {
    count = count + 1;
    console.log(count);
  }
  return (
    <>
      <h2>useState error example</h2>
      <div>{count}</div>
      <button type='button' onClick={incr}>
        {' '}
        Click me to incr
      </button>
    </>
  );
};

export default ErrorExample;
