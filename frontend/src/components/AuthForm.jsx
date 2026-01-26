import React from "react";

const AuthForm = ({ title, fields, submitText, onSubmit, isSubmitting = false, children }) => {
  return (
    <section className="max-w-md mx-auto px-6 py-12 space-y-6">
      <header className="space-y-2">
        <p className="text-sm text-[var(--muted)] uppercase tracking-[0.2em]">Auth</p>
        <h1 className="text-3xl font-bold">{title}</h1>
      </header>

      <form className="space-y-4" onSubmit={onSubmit}>
        {fields.map((field) => (
          <div key={field.name} className="space-y-2">
            <label className="text-sm text-[var(--muted)]" htmlFor={field.name}>
              {field.label}
            </label>
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              value={field.value}
              onChange={field.onChange}
              placeholder={field.placeholder}
              required={field.required}
              autoComplete={field.autoComplete}
              className="w-full rounded-xl border border-[var(--border)] bg-[var(--panel)] px-4 py-3 text-white focus:border-[var(--brand)] focus:outline-none"
            />
          </div>
        ))}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-xl bg-[var(--brand)] text-white py-3 font-semibold hover:opacity-90 transition disabled:opacity-60"
        >
          {submitText}
        </button>
      </form>

      {children ? <div className="space-y-3">{children}</div> : null}
    </section>
  );
};

export default AuthForm;
