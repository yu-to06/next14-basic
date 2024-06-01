const TaskLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className='p-4 bg-blue-400'>
      <div>ここはTASKレイアウトです</div>
      {children}
    </div>
  );
};

export default TaskLayout;
