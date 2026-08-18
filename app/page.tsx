export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <nav className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <h1 className="text-2xl font-bold text-blue-600">
            Galaxy Social
          </h1>

          <div className="flex gap-3">
            <a
              href="/login"
              className="rounded-lg px-4 py-2 font-medium text-gray-700 hover:bg-gray-100"
            >
              Log In
            </a>

            <a
              href="/register"
              className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
            >
              Create Account
            </a>
          </div>
        </div>
      </nav>

      <section className="mx-auto flex min-h-[80vh] max-w-6xl items-center px-4">
        <div className="max-w-2xl">
          <p className="mb-4 font-semibold text-blue-600">
            Welcome to Galaxy Social
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Connect with people.
            <br />
            Share your world.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Galaxy Social is your new social network for connecting with
            friends, sharing posts, discovering people, and building your
            community.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/register"
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow hover:bg-blue-700"
            >
              Join Galaxy Social
            </a>

            <a
              href="/login"
              className="rounded-xl border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 hover:bg-gray-50"
            >
              Log In
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
