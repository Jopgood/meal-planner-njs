import { Message } from "@/components/forms/form-message";
import { SignUpForm } from "@/components/forms/sign-up-form";

export default async function SignUp(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
      <div className="w-full max-w-sm">
        <SignUpForm searchParams={searchParams} />
      </div>
    </div>
  );
}
