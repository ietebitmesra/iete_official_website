import { useEffect, useRef } from "react";

const GoogleLoginButton = ({ onSuccess }) => {
  const initializedRef = useRef(false);

  useEffect(() => {
    let attempts = 0;
    const intervalId = setInterval(() => {
      attempts += 1;
      if (window.google?.accounts?.id && !initializedRef.current) {
        window.google.accounts.id.initialize({
          client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
          callback: (response) => {
            if (typeof onSuccess === "function") {
              onSuccess(response?.credential);
            }
          },
        });

        const buttonContainer = document.getElementById("google-btn");
        if (buttonContainer) {
          window.google.accounts.id.renderButton(buttonContainer, {
            theme: "outline",
            size: "large",
            width: "100%",
          });
          initializedRef.current = true;
        }
        clearInterval(intervalId);
      }

      if (attempts > 20) {
        clearInterval(intervalId);
      }
    }, 150);

    return () => clearInterval(intervalId);
  }, [onSuccess]);

  return <div id="google-btn" className="w-full" />;
};

export default GoogleLoginButton;
