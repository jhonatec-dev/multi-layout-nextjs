const buttons = ["a", "b", "c", "d", "e", "f", "g"];

export default function ToolBar() {
  return (
    <div className='toolbar'>
      {buttons.map((button) => (
        <button key={button} style={{ flex: 1 }}>{button}</button>
      ))}
    </div>
  );
}
