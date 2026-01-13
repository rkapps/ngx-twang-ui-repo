# ngx-twang-ui

A collection of beautiful, accessible Angular components built with Tailwind CSS.

## 🎨 Components

- **Button** - Customizable buttons with multiple variants
- **Checkbox** - Accessible checkbox inputs
- **Input** - Text input fields
- **Textarea** - Multi-line text areas
- **Dropdown** - Select dropdowns with search
- **Sidebar** - Responsive navigation sidebar

## Installation

**From GitHub:**

```bash
npm install git+https://https://github.com/rkapps/ngx-twang-ui-repo.git
```

**Local development:**

```bash
# Clone the repo
git clone https://https://github.com/rkapps/ngx-twang-ui-repo.git

# Link locally
cd ngx-twang-ui-repo
npm link

# In your project
npm link ngx-twang-ui
start a continuous build processs
ng build ngx-twang-ui --watch
```

## Create the application

**1. Installation:**

ng new my-app --style=css --routing
cd my-app

**2. Install the components library:**
npm install ../ngx-twang-ui-repo/dist/ngx-twang-ui

update the styles.css
@source "../node_modules/ngx-twang-ui/**/*.{html,ts}";

update the angular.json to add preserveSymlinks:true
"my-app": {
    "architect": {
      "build": {
        "options": {
          "preserveSymlinks": true
        }
      }
    }
  }

  update the "serve" with
   "options": {
            "prebundle": {
              "exclude": [
                "ngx-t
                wang-ui"
              ]
            }
          }

**3. Install tailwind css and conifigure:**
npm install tailwindcss@next

**4. Update styles.css:**

@import "tailwindcss";
@plugin "@tailwindcss/typography";

@source "./**/*.{html,ts}";

**4. Update the app.config to add Component input biinding:**
Update the config file

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
  ]
}

**5. Create the component and add the imports:**
@Component({
    selector: 'app-new-page',
    imports: [Field, TwangButtonComponent, TwangTextareaComponent, TwangDropDownComponent, TwangInputComponent, TwangCheckboxComponent],
    templateUrl: './new-page.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,

})
export class NewChatComponent {
}

**6. Add to html:**
<twang-dropdown label="Llms" (change)="onLlmProviderSelected($event)" [nodes]="llmNodes()"/>
<twang-checkbox type="checkbox" [field]="chatForm.stream" label="Stream" />
<twang-textarea label="System Prompt" [field]="chatForm.system" [rows]="15" placeholder="Enter the System prompt or instructions..."/>
<twang-button type="submit" [disabled]="chatForm().invalid()" label="Create Chat" />

Serve the app
ng serve
or
rm -rf .angular/cache ng serve

## License

MIT

---
