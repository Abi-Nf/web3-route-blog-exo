import {PropsWithChildren} from "react";
import "@/styles/globalLayout.css";

export const GlobalLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="global-container">
      <header className="global-header">
        <span>Header</span>
      </header>
      <div className="global-body-container">
        { children }
      </div>
      <footer className="global-footer">
        <span>Footer</span>
      </footer>
    </div>
  )
}