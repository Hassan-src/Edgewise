# Edgewise — Trading Journal & Analytics Dashboard

Edgewise is a trading journal and analytics dashboard built to help traders record their trades, organize trading activity, and evaluate their performance through statistical metrics and visualizations.

The application provides a centralized workspace for managing trading accounts, recording trades manually, importing historical MetaTrader reports, and reviewing trading performance through an interactive dashboard.

## Live Demo

**[Open Edgewise](https://edgewise-eight.vercel.app/)**

## Features

### Dashboard

A centralized overview of trading performance with automatically calculated statistics.

- **Net P&L:** Total profit or loss after trading costs.
- **Expectancy:** Average expected profit or loss per trade based on historical results.
- **Profit Factor:** Ratio of gross profit to gross loss.
- **Win Rate:** Percentage of trades that close with a profit.
- **Performance Overview:** Visualizes individual trade results and cumulative performance.
- **Recent Trades:** Displays the five most recent trades.

### Trade Management

Manage trading activity through a dedicated trades page.

- Add trades manually.
- Edit existing trades.
- Delete individual trades.
- View trade history in a structured table.
- Filter trades by their source.
- Sort trades by profit, loss, direction, and symbol.
- Navigate through trade records using pagination.
- View trade details, including symbol, direction, prices, volume, commission, swap, and profit.

### MetaTrader Report Import

Import historical trading data from MetaTrader reports.

- Import `.xlsx` files containing exported MetaTrader trading history.
- Parse trade information from the uploaded spreadsheet.
- Extract position IDs, symbols, direction, volume, entry and exit prices, stop loss, take profit, commission, swap, and profit.
- Associate imported trades with a trading account.
- Distinguish imported trades from manually created trades.
- Delete imported trades separately from manually recorded trades.

**Import workflow:**

1. Open the History section in MetaTrader.
2. Right-click inside the history tab.
3. Select the report option and open the XML report.
4. Open the report in Excel.
5. Save a copy in `.xlsx` format.
6. Upload the spreadsheet through Edgewise.

### Trading Accounts

Create and manage the trading account used to organize trade records.

- Create a trading account.
- Set an account or strategy name.
- Define the initial account balance.
- Use USD as the account currency.
- Associate trades with a trading account.

### Economic Calendar

View upcoming economic events through an integrated economic calendar.

- Retrieve economic events from an external calendar API.
- Display high-, medium-, and low-impact events.
- View event details, including previous, forecast, and actual values when provided by the API.
- Identify events based on their scheduled time.
- Automatically refresh calendar data periodically.

### Authentication & Account Management

User authentication and profile management powered by Supabase.

- User registration.
- Email verification.
- Secure login and logout.
- Protected application routes.
- Persistent authentication sessions.
- Update username.
- Change password.
- Upload and update profile avatars.

### User Interface

- Responsive layouts for desktop, tablet, and mobile screens.
- Light and dark themes.
- Reusable component-based interface.
- Consistent styling through a custom design system.
- Loading states and error handling.
- Toast notifications for application feedback.

## Tech Stack

| Technology           | Purpose                                    |
| -------------------- | ------------------------------------------ |
| React 19             | Frontend library                           |
| Vite 8               | Development server and build tool          |
| JavaScript           | Application logic                          |
| Styled Components    | Component-based styling                    |
| Supabase             | Authentication, database, and file storage |
| TanStack React Query | Server-state management and data fetching  |
| React Router         | Client-side routing                        |
| Recharts             | Data visualization                         |
| React Hook Form      | Form handling and validation               |
| Read Excel File      | Reading and parsing Excel reports          |
| Date-fns             | Date utilities                             |
| React Icons          | Application icons                          |
| React Hot Toast      | Notifications                              |

## Project Structure

```text
Edgewise/
├── public/
│   ├── Logo-symbol.svg
│   ├── Logo-vertical-dark.svg
│   ├── Logo-vertical-light.svg
│   ├── LogoSymbolDark.svg
│   ├── LogoSymbolLight.svg
│   ├── TrendLossDark.svg
│   ├── TrendLossLight.svg
│   ├── TrendProfitDark.svg
│   ├── TrendProfitLight.svg
│   ├── default-user.svg
│   ├── emptyghost.svg
│   └── loading.svg
│
├── src/
│   ├── context/
│   │   ├── AppContext.jsx
│   │   └── useAppMode.js
│   │
│   ├── data/
│   │   └── getEconomicData.js
│   │
│   ├── features/
│   │   ├── Dashboard/
│   │   │   ├── ChartToolTip.jsx
│   │   │   ├── DashboardLayout.jsx
│   │   │   ├── Expectancy.jsx
│   │   │   ├── NetTotal.jsx
│   │   │   ├── PerformanceAccountDetails.jsx
│   │   │   ├── PerformanceChart.jsx
│   │   │   ├── PerformanceOverview.jsx
│   │   │   ├── ProfitFactor.jsx
│   │   │   ├── RecentTrades.jsx
│   │   │   ├── RecentTradesTable.jsx
│   │   │   ├── TradeWinRatio.jsx
│   │   │   ├── TradesPerformance.jsx
│   │   │   ├── useAllTrades.js
│   │   │   └── useRecentTrades.js
│   │   │
│   │   ├── Economic/
│   │   │   ├── EconomicRow.jsx
│   │   │   ├── EconomicTable.jsx
│   │   │   └── useEconomicData.js
│   │   │
│   │   ├── Trades/
│   │   │   ├── AddTrade.jsx
│   │   │   ├── CreateTradeAccount.jsx
│   │   │   ├── CreateTradeForm.jsx
│   │   │   ├── DeleteImportedDataShow.jsx
│   │   │   ├── ImportTrade.jsx
│   │   │   ├── ImportTradesForm.jsx
│   │   │   ├── TradeAccountForm.jsx
│   │   │   ├── TradesRow.jsx
│   │   │   ├── TradesTable.jsx
│   │   │   ├── TradesTableOperations.jsx
│   │   │   ├── parseImportedData.js
│   │   │   ├── useAccount.js
│   │   │   ├── useAddTrade.js
│   │   │   ├── useCreateAccount.js
│   │   │   ├── useDeleteImportedTrades.js
│   │   │   ├── useDeleteTrade.js
│   │   │   ├── useImportTrade.js
│   │   │   ├── useTrades.js
│   │   │   ├── useTradesSymbols.js
│   │   │   └── useUpdateTrade.js
│   │   │
│   │   └── authentication/
│   │       ├── LoginForm.jsx
│   │       ├── SignupForm.jsx
│   │       ├── UpdateUserDataForm.jsx
│   │       ├── UpdateUserPasswordForm.jsx
│   │       ├── UserAvatar.jsx
│   │       ├── useLogin.js
│   │       ├── useLogout.js
│   │       ├── useSignup.js
│   │       ├── useUpdateUser.js
│   │       └── useUser.js
│   │
│   ├── hooks/
│   │   ├── useClickOutside.js
│   │   └── useLocalStorageState.js
│   │
│   ├── pages/
│   │   ├── Account.jsx
│   │   ├── Dashboard.jsx
│   │   ├── EconomicEvents.jsx
│   │   ├── Login.jsx
│   │   ├── PageNotFound.jsx
│   │   ├── Signup.jsx
│   │   ├── Trades.jsx
│   │   └── VerifyEmail.jsx
│   │
│   ├── services/
│   │   ├── apiAuth.js
│   │   ├── apiTrades.js
│   │   ├── apiTradesAccount.js
│   │   └── supabase.js
│   │
│   ├── styles/
│   │   └── GlobalStyles.js
│   │
│   ├── ui/
│   │   ├── AppLayout.jsx
│   │   ├── Avatar.jsx
│   │   ├── ButtonIcon.jsx
│   │   ├── Buttons.jsx
│   │   ├── Card.jsx
│   │   ├── CardChart.jsx
│   │   ├── CardFooter.jsx
│   │   ├── CardHead.jsx
│   │   ├── CardHelperInfo.jsx
│   │   ├── CardInfo.jsx
│   │   ├── ConfirmDelete.jsx
│   │   ├── DarkModeToggle.jsx
│   │   ├── EmptyDashboard.jsx
│   │   ├── ErrorFallBack.jsx
│   │   ├── FileInput.jsx
│   │   ├── Filter.jsx
│   │   ├── Form.jsx
│   │   ├── FormRow.jsx
│   │   ├── FormRowVertical.jsx
│   │   ├── Header.jsx
│   │   ├── Heading.jsx
│   │   ├── ImageInput.jsx
│   │   ├── Input.jsx
│   │   ├── InputPassword.jsx
│   │   ├── Loading.jsx
│   │   ├── Logo.jsx
│   │   ├── MainNav.jsx
│   │   ├── Menus.jsx
│   │   ├── MetricValue.jsx
│   │   ├── Modal.jsx
│   │   ├── NoAccount.jsx
│   │   ├── Pagination.jsx
│   │   ├── ProtectedRoute.jsx
│   │   ├── Row.jsx
│   │   ├── SecondaryText.jsx
│   │   ├── Select.jsx
│   │   ├── SideBar.jsx
│   │   ├── SmallNav.jsx
│   │   ├── SortBy.jsx
│   │   ├── SpinnerMini.jsx
│   │   ├── Table.jsx
│   │   ├── TableOperations.jsx
│   │   ├── TextArea.jsx
│   │   ├── TextLink.jsx
│   │   ├── TrendLine.jsx
│   │   └── Warning.jsx
│   │
│   ├── utils/
│   │   ├── constants.js
│   │   ├── fileHeaderChecker.js
│   │   ├── getTradePerformance.js
│   │   ├── helper.js
│   │   └── readExcel.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
└── vite.config.js
```

## Getting Started

### Prerequisites

- Node.js
- npm
- A Supabase project

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Hassan-src/Edgewise.git
```

2. Navigate to the project directory:

```bash
cd Edgewise
```

3. Install dependencies:

```bash
npm install
```

### Supabase Configuration

Edgewise uses Supabase for authentication, database operations, and avatar storage.

The Supabase client is configured in:

```text
src/services/supabase.js
```

Before running your own instance, configure this file with your Supabase project URL and publishable key.

The application uses the following Supabase resources:

- Supabase Authentication.
- `trades` table.
- `trading_accounts` table.
- `avatars` storage bucket.

Configure the corresponding database tables, authentication settings, storage permissions, and Row Level Security (RLS) policies for your Supabase project.

**Note:** Database schema and migration files are not included in this repository.

### Run the Development Server

```bash
npm run dev
```

Vite starts the development server. Open the local URL displayed in your terminal.

## Available Scripts

| Command           | Description                           |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Starts the Vite development server    |
| `npm run build`   | Builds the application for production |
| `npm run preview` | Previews the production build locally |
| `npm run lint`    | Runs ESLint                           |

## Application Architecture

Edgewise follows a feature-based React project structure.

- **Pages:** Define the application's main routes.
- **Features:** Group components, forms, and custom hooks by application functionality.
- **UI:** Contains reusable interface components.
- **Services:** Handle Supabase authentication and database operations.
- **Context:** Manages application-wide UI preferences.
- **Hooks:** Contains reusable React hooks.
- **Utils:** Contains shared helper functions and data-processing logic.

TanStack React Query manages server state, including fetching, caching, mutations, and query invalidation.

Styled Components provides component-level styling and supports the application's responsive layouts and theme system.

## Deployment

The production application is deployed through Vercel.

**Live application:** https://edgewise-eight.vercel.app/

---

Developed by [Hassan Esmaeilpour](https://github.com/Hassan-src).
