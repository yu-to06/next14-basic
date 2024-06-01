const TaskLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className='p-4 bg-green-400'>
      <div>ここはAdminレイアウトです</div>
      {children}
    </div>
  );
};

export default TaskLayout;
