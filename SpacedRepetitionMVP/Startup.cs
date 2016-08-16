using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SpacedRepetitionMVP.Startup))]
namespace SpacedRepetitionMVP
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
