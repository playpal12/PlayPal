import Form from '@components/FormComponent';
import { ResetPasswordForm } from '@content/contents';
import useHelper from '@hooks/useHelper';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const FormTitle = dynamic(() => import('@components/FormElement').then((mod) => mod.FormTitle));


const ResetPasswordLink = () => {
  const { onResetSubmit } = useHelper();
  return (
    <main className="flex h-[25rem] flex-col items-center justify-center md:h-screen">
      <div className="formCss">
        <FormTitle title="Reset Password" />
        <Form
          formFields={ResetPasswordForm}
          onSubmit={onResetSubmit}
          form={'Reset'}
          buttonType={'submit'}
          buttonText={'Submit'}
          className="mb-5"
        />
        <div className="text-center font-medium text-green-500 hover:underline">
          <Link href="/auth/signin">Already have an account? Sign In</Link>
        </div>
      </div>
    </main>
  );
};

export default ResetPasswordLink;
