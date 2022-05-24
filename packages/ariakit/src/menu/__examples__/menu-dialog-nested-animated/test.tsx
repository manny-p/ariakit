import {
  click,
  getByLabelText,
  getByRole,
  hover,
  press,
  render,
  sleep,
  type,
  waitFor,
} from "ariakit-test";
import Example from ".";

const getMenuButton = () => getByRole("button", { name: "Edit" });
const getMenu = (name: string) =>
  getByLabelText(name, { selector: "[role='menu']" });
const getMenuItem = (name: string) => getByRole("menuitem", { name });

test("show/hide submenu on click", async () => {
  render(<Example />);
  // expect(getMenu("Edit")).not.toBeVisible();
  // await click(getMenuButton());
  // expect(getMenu("Edit")).toBeVisible();
  // expect(getMenu("Find")).not.toBeVisible();
  // await click(getMenuItem("Find"));
  // expect(getMenu("Find")).toBeVisible();
  // expect(getMenuItem("Find")).toHaveFocus();
  // await click(getMenuItem("Find"));
  // expect(getMenu("Find")).toBeVisible();
  // expect(getMenuItem("Find")).toHaveFocus();
  // await click(getMenuItem("Find Next"));
  // expect(getMenu("Edit")).not.toBeVisible();
  // expect(getMenuButton()).toHaveFocus();
});
