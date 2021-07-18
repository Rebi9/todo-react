export const AlertMessage = (props) => {
  const { isMaxTodoSize } = props;

  const style = {
    color: "red"
  };

  return isMaxTodoSize && <p style={style}>登録できるタスクは5個までです。</p>;
};
