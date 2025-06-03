import { CircleCheck } from 'lucide-react';

type Props = {
  showSuccess: boolean;
};

function Success({ showSuccess }: Props) {
  return (
    <>

      {showSuccess && (
        <div className='position'>

     
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
           </div>
      )}
    </>
  );
}

export default Success;
