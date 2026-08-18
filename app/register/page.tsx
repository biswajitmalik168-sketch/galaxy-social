export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow">
        <h1 className="text-3xl font-bold text-blue-600">
          Galaxy Social
        </h1>

        <h2 className="mt-2 text-xl font-semibold text-gray-900">
          Create your account
        </h2>

        <form className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Full name"
            className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500"
          />

          <input
            type="email"
            placeholder="Email address"
            className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500"
          />

          <input
            type="password"
            placeholder="Confirm password"
            className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a
            href="/login"
            className="font-semibold text-blue-600 hover:underline"
          >
            Log in
          </a>
        </p>
      </div>
    </main>
  );
}
