import { useRouter } from "next/router";
//
import Modal from "react-modal";

const customStyles: any = {
  overlay: {
    background: "rgba(35, 35, 35, 0.2)",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    borderRadius: "10px",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "20px 25px",
  },
};

Modal.setAppElement("#__next");

export default function Auth({ isOpen, onClose }: any) {
  return (
    <Modal isOpen={isOpen} style={customStyles} onRequestClose={onClose}>
      <div className="flex w-full flex-col">
        <VK />
        <GOOGLE />
      </div>
    </Modal>
  );
}

const VK = () => {
  const router = useRouter();

  return (
    <button
      style={{
        backgroundColor: "#0077ff",
        padding: "6px 16px",
        display: "flex",
        alignItems: "center",
        borderRadius: "10px",
        color: "white",
        fontSize: "18px",
        fontStyle: "700",
      }}
      onClick={() =>
        router.push(
          "https://https://jellyplainv2.herokuapp.com/auth/login/vkontakte"
        )
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="white"
      >
        <path
          className="st0"
          d="M13.162 18.994c.609 0 .858-.406.851-.915-.031-1.917.714-2.949 2.059-1.604 1.488 1.488 1.796 2.519 3.603 2.519h3.2c.808 0 1.126-.26 1.126-.668 0-.863-1.421-2.386-2.625-3.504-1.686-1.565-1.765-1.602-.313-3.486 1.801-2.339 4.157-5.336 2.073-5.336h-3.981c-.772 0-.828.435-1.103 1.083-.995 2.347-2.886 5.387-3.604 4.922-.751-.485-.407-2.406-.35-5.261.015-.754.011-1.271-1.141-1.539-.629-.145-1.241-.205-1.809-.205-2.273 0-3.841.953-2.95 1.119 1.571.293 1.42 3.692 1.054 5.16-.638 2.556-3.036-2.024-4.035-4.305-.241-.548-.315-.974-1.175-.974h-3.255c-.492 0-.787.16-.787.516 0 .602 2.96 6.72 5.786 9.77 2.756 2.975 5.48 2.708 7.376 2.708z"
        />
      </svg>
      <span className="ml-[10px] text-[18px] font-medium">Войти через vk</span>
    </button>
  );
};
const GOOGLE = () => {
  const router = useRouter();

  return (
    <button
      style={{
        padding: "6px 16px",
        display: "flex",
        alignItems: "center",
        borderRadius: "10px",
        color: "#292929",
        fontSize: "18px",
        fontStyle: "700",
        marginTop: "15px",
      }}
      className="border hover:bg-[#86368D1A]"
      onClick={() =>
        router.push(
          "https://oauth.vk.com/authorize?client_id=51473574&display=page&redirect_uri=https://jellyplain-main.vercel.app/redirect&scope=friends&response_type=code&v=5.131&state=123456"
        )
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        width="24"
        height="24"
      >
        <path
          fill="#FFC107"
          d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
        />
        <path
          fill="#FF3D00"
          d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
        />
        <path
          fill="#4CAF50"
          d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
        />
        <path
          fill="#1976D2"
          d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
        />
      </svg>
      <span className="ml-[10px] text-[18px] font-medium">
        Войти через google
      </span>
    </button>
  );
};
