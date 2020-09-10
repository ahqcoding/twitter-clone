import React from "react";

export default function Account() {
  return (
    <div className="w-full relative">
      <div className="flex items-center w-full hover:bg-lightblue rounded-full p-2 focus:outline-none">
        <img
          src="https://pbs.twimg.com/profile_images/67285389/digdug-fygar-2a_reasonably_small.gif"
          className="w-10 h-10 rounded-full border border-lighter"
        />
        <div className="hidden xl:block ml-4">
          <p className="text-sm font-bold leading-tight"> Steph Dietz </p>
          <p className="text-sm leading-tight"> @SaaSyEth </p>
        </div>
        <i className="hidden xl:block fas fa-angle-down ml-auto text-lg"></i>
      </div>
      {/* <div class="absolute bottom-0 left-0 w-64 rounded-lg shadow-md border-lightest bg-white mb-16">
            <button class="p-3 flex items-center w-full hover:bg-lightest p-2 focus:outline-none">
            <img
                src="profile.png"
                class="w-10 h-10 rounded-full border border-lighter"
            />
            <div class="ml-4">
                <p class="text-sm font-bold leading-tight"> Steph Dietz </p>
                <p class="text-sm leading-tight"> @SaaSyEth </p>
            </div>
            <i class="fas fa-check ml-auto test-blue"></i>
            </button>
            <button class="w-full text-left hover:bg-lightest border-t border-lighter p-3 test-sm focus:outline-none">
            Add an existing account
            </button>
            <button class="w-full text-left hover:bg-lightest border-t border-lighter p-3 test-sm focus:outline-none">
            Log out @SaaSyEth
            </button>
        </div> */}
    </div>
  );
}
