# AppleBites Prototype in Nextjs

## Database Schema

### Auth

```sql
EXTERNAL_USERS
- id (pk)
- email
- password_hash
- full_name
- company_name
- role ENUM[lead, buyer, seller]
- subscription ENUM[free, growth, empire]
- tag ENUM[nurture, progress]
- created_at (timestamp)
- updated_at (timestamp)

INTERNAL_USERS
- id (pk)
- email
- password_hash
- full_name
- role ENUM[admin, deal_manager, analyst, bizdev, due_diligence, team_member, operation_manager]
- created_at (timestamp)
- updated_at (timestamp)

SESSIONS
- id (pk)
- user_type
- user_id (fk -> EXTERNAL_USERS.id or INTERNAL_USERS.id)
- session_token
- expires_at (timestamp)
- created_at (timestamp)
```

### CRM

```sql
PIPELINE_ITEMS
- id (pk)
- title
- type ENUM[opportunity, deal]
- direction ENUM[buy, sell]
- status ENUM[open, closed, lost]
- stage (jsonb)   // workflow stage or progress detail
- client_id (fk -> EXTERNAL_USERS.id)
- manager_id (fk -> INTERNAL_USERS.id)
- created_at
- updated_at

TASKS
- id (pk)
- pipeline_item_id (fk -> PIPELINE_ITEMS.id)
- assigned_to (fk -> INTERNAL_USERS.id)
- title
- status ENUM[pending, in_progress, completed]
- due_date (timestamp)

KPI
- id (pk)
- metric
- value (numeric)
- period (date or enum[monthly, quarterly, yearly])
```

### Valuations

```sql
EVALUATIONS
- id (pk)
- client_id (fk -> EXTERNAL_USERS.id)
- naics_code
- ebitda
- score ENUM[A, B, C, D, E, F]
- created_at

VALUATIONS
- id (pk)
- evaluation_id (fk -> EVALUATIONS.id)
- narrative (text)
- report_url (optional, link to file or generated PDF)
- created_at
```

### Shared Access

```sql
FILES
- id (pk)
- pipeline_item_id (fk -> PIPELINE_ITEMS.id)
- uploaded_by (fk -> INTERNAL_USERS.id or EXTERNAL_USERS.id)
- category ENUM[buyer, seller, finance, hr, operations, legal]
- filename
- filetype
- url (storage link)
- status ENUM[draft, final, signed]
- created_at
- updated_at

PERMISSIONS
- id (pk)
- file_id (fk -> FILES.id)
- user_type ENUM[external, internal]
- user_id (fk -> EXTERNAL_USERS.id or INTERNAL_USERS.id)
- access_level ENUM[read, write, admin]
```

### Audit

```sql
AUDIT_LOGS
- id (pk)
- user_type ENUM[external, internal]
- user_id (fk)
- action
- target_table
- target_id
- timestamp
- metadata (jsonb)
```
