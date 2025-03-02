import UserCartPage from "./_cart_components/UserCartPage";

export default function Page() {
  return (
    <div className="container pt-28 pb-12 lg:pt-32 lg:pb-24 min-h-[calc(100vh)] flex flex-col">
      <UserCartPage />
    </div>
  );
}