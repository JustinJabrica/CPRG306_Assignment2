import Header from "@/components/header";
import Footer from "@/components/footer";
import Search from "@/app/studentList/search";

export default function StudentList() {
  return (
    <>
      <div className="min-w-[500px] grid grid-rows-[50px_1fr_20px] items-center justify-items-center min-h-screen sm: font-[family-name:var(--font-geist-sans)]">
        <header className="bg-yellow-200 w-full">
          <Header />
        </header>
        <main className="flex flex-col row-start-2 items-center my-5 sm:items-start">
          <Search />
        </main>
        <footer className="w-full row-start-3">
          {/* className="row-start-3 flex gap-6 flex-wrap items-center justify-center" */}
          <Footer />
        </footer>
      </div>
    </>
  );
}
