import { TestBed } from '@angular/core/testing';
import { GuidesComponent } from './guides.component';
describe('GuidesComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [GuidesComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(GuidesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=guides.component.spec.js.map