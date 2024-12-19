import { Message } from "@/components/forms/form-message";
import { LoginForm } from "@/components/forms/login-form";

export default async function SignIn(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm searchParams={searchParams} />
      </div>
    </div>
  );
}
