
import { IoClose } from "react-icons/io5";

interface Props {
  hideModal: () => void;
  title: string;
  children: React.ReactNode;
}
const Modal = ({ hideModal, title, children }: Props) => {
  return (
   
    <div className="h-screen  flex items-center mx-auto justify-center bg-dark-1/50   absolute top-0  bottom-0 p-15 right-0 left-0  ">
      <div onClick={hideModal}></div>
      <div className="bg-white p-5 px-10 rounded-md shadow-lg">
        <div className="flex gap-4 items-center my-5">
          <IoClose onClick={hideModal} />
          <span>{title}</span>
        </div>
        {children}
      </div>
    </div>
 
  );
};

export default Modal;
