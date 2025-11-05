# Deploying to Vercel

## Quick Deploy (Recommended)

### Option 1: Deploy via Vercel CLI

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Navigate to the landing page directory**:
   ```bash
   cd landingui-react
   ```

3. **Login to Vercel**:
   ```bash
   vercel login
   ```

4. **Deploy**:
   ```bash
   vercel
   ```
   - Follow the prompts
   - It will ask if you want to deploy to production - choose `Y`
   - It will give you a URL when done

### Option 2: Deploy via Vercel Dashboard

1. **Push to GitHub** (if not already):
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push
   ```

2. **Import to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - **Important**: Set the **Root Directory** to `landingui-react`
   - Vercel will auto-detect Vite and configure it
   - Click "Deploy"

## Configuration

The project is already configured with:
- ✅ `vercel.json` - Deployment configuration
- ✅ Build command: `npm run build`
- ✅ Output directory: `dist`
- ✅ Framework: Vite (auto-detected)

## Environment Variables

If you need any environment variables, add them in:
- Vercel Dashboard → Your Project → Settings → Environment Variables

## Custom Domain

After deployment:
1. Go to your project settings in Vercel
2. Click "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Build Settings (Already Configured)

- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

## Troubleshooting

If you encounter issues:

1. **Check build locally**:
   ```bash
   npm run build
   ```

2. **Preview build**:
   ```bash
   npm run preview
   ```

3. **Check Vercel logs**:
   - Go to Vercel Dashboard → Your Project → Deployments → Click on a deployment → View Logs

## Next Steps After Deployment

1. Update any API endpoints if needed
2. Configure custom domain
3. Set up environment variables if required
4. Enable analytics (optional)

