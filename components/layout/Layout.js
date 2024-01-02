import Link from "next/link";

function Layout({ children }) {
  return (
    <div>
      <header className="header">
        <h2>crm project</h2>
        <Link href="./add-customer">Add Coustomer</Link>
      </header>
<div className="main">{children}</div>
<footer className="footer">
    <p>this site maked by milad lotfi</p>
</footer>
    </div>
  );
}

export default Layout;
