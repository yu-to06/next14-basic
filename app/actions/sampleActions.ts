"use server";

interface FormState {
  error: string;
}

export const createTask = async (
  taskId: number,
  state: FormState,
  formData: FormData
) => {
  // Add task to DB
  console.log("タスク追加が完了しました。");
  console.log(formData.get("name"));
  state.error = "エラーが発生しました。";
  return state
};
