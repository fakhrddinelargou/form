import { CircleCheck } from 'lucide-react';

type Props = {
  showSuccess: boolean;
};

function Success({ showSuccess }: Props) {
  return (
    <>
      {showSuccess && (
        <div className="mssg-snt">
          <p className="done">
            <span>
              <CircleCheck size={20} />
            </span>
            Message Sent!
          </p>
          <p className="description">
            Thanks for completing the form. We'll be in touch soon!
          </p>
        </div>
      )}
    </>
  );
}

export default Success;
