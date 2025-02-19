# Create directories
New-Item -ItemType Directory -Force -Path app/student/apply, app/student/dashboard, app/student/upload-payment
New-Item -ItemType Directory -Force -Path app/admin/dashboard, app/admin/review-applications, app/admin/allocate-rooms
New-Item -ItemType Directory -Force -Path app/api/apply, app/api/review, app/api/upload-payment, app/api/allocate-room
New-Item -ItemType Directory -Force -Path components/ui, lib

# Create files
New-Item -ItemType File -Force -Path app/layout.tsx, app/page.tsx
New-Item -ItemType File -Force -Path app/student/apply/page.tsx, app/student/dashboard/page.tsx, app/student/upload-payment/page.tsx
New-Item -ItemType File -Force -Path app/admin/dashboard/page.tsx, app/admin/review-applications/page.tsx, app/admin/allocate-rooms/page.tsx
New-Item -ItemType File -Force -Path app/api/apply/route.ts, app/api/review/route.ts, app/api/upload-payment/route.ts, app/api/allocate-room/route.ts
New-Item -ItemType File -Force -Path components/AccommodationApplicationForm.tsx, components/PaymentUploadForm.tsx, components/ApplicationReviewCard.tsx, components/RoomAllocationForm.tsx
New-Item -ItemType File -Force -Path lib/utils.ts, lib/types.ts, lib/db.ts
New-Item -ItemType File -Force -Path styles/globals.css

Write-Host "File structure created successfully!" -ForegroundColor Green

