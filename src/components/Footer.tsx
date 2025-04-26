export function Footer() {
    return (
      <footer className="text-center py-6 border-t border-gray-200 text-gray-600 bg-gray-100/95 backdrop-blur-sm">
        <p className="text-sm animate-[fadeIn_1s_ease-in-out]">
          © {new Date().getFullYear()}  Muhammad Abeer. All rights reserved. | Built with{" "}
          <span className="text-blue-600">Next.js & Tailwind</span>
        </p>
      </footer>
    );
  }